package com.gosuncn.hello;

import java.nio.charset.Charset;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

public class DataClientHandler extends ChannelInboundHandlerAdapter{
	
	
	public void channelRead(ChannelHandlerContext ctx, Object msg) {
		
		ctx.write((ByteBuf)msg);
	}
	
	public void channelReadComplete(ChannelHandlerContext ctx) {
		
		ctx.flush();
	}
	
	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
		cause.printStackTrace();
		ctx.close();
	}
}
