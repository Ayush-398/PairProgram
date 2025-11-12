import axiosInstance from "../lib/Axios";

export const sessionApi = {
    createSession: async (data) =>{
      const response =   await axiosInstance.post("/session",data)
      return response.data
    },

        getActiveSessions: async () =>{
      const response =   await axiosInstance.post("/sessions/active",)
      return response.data
    },
        getMyRecentSessions: async () =>{
      const response =   await axiosInstance.post("/sessions/my-recent",)
      return response.data
    },
        getSessionById: async (id) =>{
      const response =   await axiosInstance.post(`/sessions/${id}`,)
      return response.data
    },
            joinSession: async (id) =>{
      const response =   await axiosInstance.post(`/sessions/${id}/join`,)
      return response.data
    },
            endSession: async (id) =>{
      const response =   await axiosInstance.post(`/sessions/${id}/end`)
      return response.data
    },
        getStreanToken: async (id) =>{
      const response =   await axiosInstance.post(`/chat/token`,)
      return response.data
    },

}