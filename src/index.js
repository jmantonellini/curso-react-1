import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={"Pablo Lezcano"} image={Faker.image.avatar()} comment={"ATR perro cumbia cagetealo piola gato!"} timeAgo={"Today at 4:45PM"} comen/>
            <CommentDetail author={"Gustavo Cerati"} image={Faker.image.avatar()} comment={"Gracias Totales"} timeAgo={"Today at 5:00PM"}/>
            <CommentDetail author={"Charly García"} image={Faker.image.avatar()} comment={"Say no more.."} timeAgo={"Today at 6:20PM"}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));