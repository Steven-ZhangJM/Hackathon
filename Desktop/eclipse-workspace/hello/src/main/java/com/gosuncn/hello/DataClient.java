package com.gosuncn.hello;

import java.util.Scanner;

import io.netty.bootstrap.Bootstrap;
import io.netty.buffer.ByteBuf;
import io.netty.buffer.ByteBufUtil;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.FixedLengthFrameDecoder;
import io.netty.handler.codec.LengthFieldBasedFrameDecoder;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import io.netty.handler.ssl.util.InsecureTrustManagerFactory;
import io.netty.util.CharsetUtil;

/**
 * This class server as the client of the application and will 
 * 
 * @author Jinming
 *
 */
public class DataClient {
	
	static final String HOST = System.getProperty("host", "127.0.0.1");
	static final int PORT = Integer.parseInt(System.getProperty("port", "3000"));
	
	public static void main(String[] args) throws Exception{
		
		EventLoopGroup group = new NioEventLoopGroup();
		try {
			Bootstrap b = new Bootstrap();
			b.group(group)
			 .channel(NioSocketChannel.class)
			 .option(ChannelOption.SO_KEEPALIVE, true)
			 .handler(new ChannelInitializer<SocketChannel>() {
				
				public void initChannel(SocketChannel ch) throws Exception { 
					ch.pipeline().addLast(new DataClientHandler());
					ch.pipeline().addLast(new LengthFieldBasedFrameDecoder(1024, 2, 2, 2, 0));
	
				}
			 });
			
			ChannelFuture f = b.connect(HOST, PORT).sync();
			
			ByteBuf buf = f.channel().alloc().buffer(200);
			
			//buf.writeBytes(ByteBufUtil.decodeHexDump("5555003d383630343736303432313231303632030007001b0200015f0d1c6b155180a621e7342a8500002c0340230260002300da4f08e8ffffffffaaaa"));
			
			
			System.out.println("Please enter keys: ");
			Scanner sc = new Scanner(System.in);
			String str = sc.nextLine();
			
			
			buf.writeBytes(ByteBufUtil.decodeHexDump(str));
				
			f.channel().writeAndFlush(buf);
			
			f.channel().closeFuture().sync();
			sc.close();
		} finally {
			group.shutdownGracefully();
			
		}
		
		
	}
	
	 

}
