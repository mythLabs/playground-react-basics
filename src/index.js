import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
         <CommentDetail author="Sam" timeAgo="Today at 5:34PM" content="Great one" avatar = {faker.image.avatar()}/>
         <CommentDetail author="Andy" timeAgo="Yesterday at 3:34PM" content="Nice" avatar = {faker.image.avatar()}/>
         <CommentDetail author="Midas" timeAgo="Today at 4:34AM" content="Amazing " avatar = {faker.image.avatar()}/>
        </div>
    )
}

reactDOM.render(<App/>,document.querySelector('#root'));