import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/unnamed.png";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../api/Api";

const Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


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
                            <button disabled={props.followingInProgress.
                            some((id: any) => id === u.id)} onClick={() => {props.unfollow(u.id)}}>
                                Unfollow
                            </button>
                            :
                            <button disabled={props.followingInProgress.
                            some((id: any) => id === u.id)} onClick={() => {props.follow(u.id)}}>
                                Follow
                            </button>}
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