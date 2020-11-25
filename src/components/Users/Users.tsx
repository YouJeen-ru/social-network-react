import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/unnamed.png";
import {NavLink} from 'react-router-dom';
import axios from "axios";

const Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    // @ts-ignore
    // @ts-ignore
    return <div>
        <div className={styles.numberPag}>
            {pages.map(p => {

                // @ts-ignore
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}


        </div>
        {
            props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ?
                            <button disabled={props.followingInProgress.some((id: any) => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5e5dd360-92d1-4f44-8e94-33caa0f21526"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)

                                        }
                                        props.toggleIsFollowingProgress(false, u.id)

                                    })


                            }}>Unfollow</button>

                            :
                            <button disabled={props.followingInProgress.some((id: any) => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5e5dd360-92d1-4f44-8e94-33caa0f21526"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)

                                        }
                                        props.toggleIsFollowingProgress(false, u.id)

                                    })


                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                         <div>{"u.location.city"}</div>
                    </span>
                </span>

            </div>)
        }
    </div>;
};

export default Users;