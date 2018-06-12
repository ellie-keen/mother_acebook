import React from 'react';
const client = require('../client');

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCreate = this.onCreate.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // event.preventDefault();
        var newPost = {}
        newPost["content"] = this.state.value
        this.onCreate(newPost)
        window.location = "#"

    }

    onCreate(newPost) {
        client({method: 'POST',
            path: '/api/posts',
            entity: newPost,
            headers: {'Content-Type': 'application/json'}
        }).done(); console.log("Hi")
        //     .then(response => {client({method: 'GET', path: '/api/posts'}).then(response => {
        //     this.setState({posts: response.entity._embedded.posts});
        // })})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="content" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreatePost