import React from 'react'
import Photo from './Photo'
// import comments

const Single = React.createClass({
    render() {
        
        //index of the post
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);

        // get us post
        const post = this.props.posts[i]

        return(
            <div className='single-photo'>
                <Photo i={i} post={post} {...this.props}/>
            </div>
        )
    }
})

export default Single