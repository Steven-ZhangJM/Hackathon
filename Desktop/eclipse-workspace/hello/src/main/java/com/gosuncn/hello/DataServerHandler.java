package com.gosuncn.hello;

import java.nio.charset.Charset;
import java.sql.Connection;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.TimeZone;
import java.util.function.Consumer;

import com.gosuncn.hello.bizHandler.GPS;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.ByteBufUtil;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.util.ReferenceCountUtil;

/**
 * This class take the data sent to the server and pass
 * 
 * @author Jinming
 *
 */
public class DataServerHandler extends ChannelInboundHandlerAdapter{
	
	private Consumer<Connection> doOnConnection;
	
	public void channelRead(ChannelHandlerContext ctx, Object msg) {
		
		ByteBuf in = (ByteBuf) msg;
		String str = ByteBufUtil.hexDump(in);
		System.out.println("Total data is: " + str.toUpperCase());
		
		dataBuf = in.slice(0, 11);
		System.out.println("GPS data is: " + ByteBufUtil.hexDump(dataBuf));
		gps = new GPS(dataBuf);
		System.out.println("Analyze GPS data: "+ "\n" + gps.analyze() +"\n");
		
		ctx.fireChannelRead(msg);
	}
	
	private ByteBuf dataBuf;
	private GPS gps;
	
	/*
	 * inner class to parse the data
	 */
	private class GPS {
		private ByteBuf data;
		
		public GPS(ByteBuf dataBuf) {
			this.data = dataBuf;
		}
		
		public String analyze() {
			long timeInt = data.readInt();
			
			DateTimeFormatter ftf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	        String time =  ftf.format(LocalDateTime.ofInstant(Instant.ofEpochMilli(timeInt*1000), ZoneId.systemDefault()));
	        
	        byte loc = (byte) data.readUnsignedByte();
			String  longitude = null,
					latitude = null;
			
			if(((loc >>> 7) & 0x1) == 0) {
				longitude = "East";
			} else {
				longitude = "West";
			}
			
			if(((loc >>> 6) & 0x1) == 0) {
				latitude = "South";
			} else {
				latitude = "North";
			}
			
			int UserId = ((loc >>> 0) & 0xf) ;
			
			byte longitudeData1 = (byte) data.readUnsignedByte();
			byte longitudeData2 = (byte) data.readUnsignedByte();
			byte longitudeData3 = (byte) data.readUnsignedByte();
			String longData =  byteToBit(longitudeData1) + byteToBit(longitudeData2) + byteToBit(longitudeData3);
			double longitudeData = Integer.parseInt(longData, 2) / 100000.0;
			
			byte latitudeData1 = (byte) data.readUnsignedByte();
			byte latitudeData2 = (byte) data.readUnsignedByte();
			byte latitudeData3 = (byte) data.readUnsignedByte();
			String latData = byteToBit(latitudeData1) + byteToBit(latitudeData2) + byteToBit(latitudeData3);
			double latitudeData = Integer.parseInt(latData, 2) / 100000.0;
			
			return "Time is " + time + "\n"
					+ longitude + " Longitude is " + longitudeData + "\n"
					+ latitude + " Latitude is " +  latitudeData + "\n"
					+"UserId is " + UserId;
		}
		
		
		
		public String byteToBit(byte b) {
			 return "" +(byte)((b >> 7) & 0x1) + 
			 (byte)((b >> 6) & 0x1) + 
			 (byte)((b >> 5) & 0x1) + 
			 (byte)((b >> 4) & 0x1) + 
			 (byte)((b >> 3) & 0x1) + 
			 (byte)((b >> 2) & 0x1) + 
			 (byte)((b >> 1) & 0x1) + 
			 (byte)((b >> 0) & 0x1);
		}
		
		
	}
	
	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
		cause.printStackTrace();
		ctx.close();
	}
	
	
}
