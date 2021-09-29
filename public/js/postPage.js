const deletePost = async (event) => {
    const pathParams = window.location.pathname + window.location.search;
    const pathArray = pathParams.split('/');
    const postId = pathArray[2];
    console.log(postId);

    const postDelete = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    });

    if (postDelete.ok) {
        location.replace('/');
    } else {
        alert('Failed to delete post')
    }
}

document.querySelector('#delete-button').addEventListener('click', deletePost);
//document.querySelector('#update-button').addEventListener('click', updatePost);
//document.querySelector('#comment-button').addEventListener('click', commentPost);