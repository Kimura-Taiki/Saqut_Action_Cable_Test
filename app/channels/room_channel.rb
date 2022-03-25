  class RoomChannel < ApplicationCable::Channel
    def subscribed
      p "subscribedしたよー"
      # console.log("subscribedしたよー")
      stream_from "room_channel"
    end
  
    def unsubscribed
      # Any cleanup needed when channel is unsubscribed
    end
  
    def speak(data)
      p "Channel側のspeakへ来たよー"
      # ActionCable.server.broadcast("room_channel", {message: data["message"]})
      Message.create! content: data["message"]
    end
  end
