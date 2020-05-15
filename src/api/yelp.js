import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer WYScSl9qEUwysrj6BNDJgd2BLQFwnTtnGoYsprwca03Heq6gdkaAjZ-M1z4srmKZ4GF9DGOuXwjfokf0H_XipeKvLoQq-QjaAgvE9zQkczomk0RDT9Tg-JerlJeoXnYx'
    }
})