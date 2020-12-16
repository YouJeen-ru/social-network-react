import React from 'react';
import axios from "axios";


const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5e5dd360-92d1-4f44-8e94-33caa0f21526"
    }


})

export const usersAPI = {
    getUsers(currentPage: number = 1, Pagesize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${Pagesize}`)
            .then(response => response.data)

    },
    follow(userId: any) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId: any) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: any) {
        return profileAPI.getProfile(userId)
    }


}
export const profileAPI = {
    getProfile(userId: any) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: any) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: any) {
        return instance.put(`profile/status`, {status})
    }


}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: any, password: any, rememberMe: any = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },



}



