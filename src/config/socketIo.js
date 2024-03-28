import {Server} from 'socket.io'
import jwt from 'jsonwebtoken'
import {} from 'dotenv/config'

const access_token_key = process.env.ACCESS_TOKEN_KEY

var io
function initializeSocketServer(httpServer) {
	io = new Server(httpServer, {
		cors: {origin: '*'},
	})

	io.on('connection', (socket) => {

		console.log(`Socket IO connected, user ${socket.id}`)
		socket.emit("check","You are connected to socket io server")

	    //client socket.emit("join-room", conversationId)
		socket.on("test",()=>{
			console.log("Socket is working good!");
		})

	})
}
export {initializeSocketServer, io}