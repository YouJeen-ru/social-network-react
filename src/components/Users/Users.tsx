import React from 'react';
import styles from './Users.module.css';

const Users = (props: any) => {

if (props.users.length === 0) {
    props.setUsers([

        {
            id: 1,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
            followed: false,
            fullName: 'Dmitriy',
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'I am boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
            followed: false,
            fullName: 'Andrew',
            status: 'I am boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },

    ])
}


    return <div>
        {
            props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                         <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>;
};

export default Users;