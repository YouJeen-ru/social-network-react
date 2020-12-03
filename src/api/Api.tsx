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
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

    },
    unfollow(userId: any) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }


}



