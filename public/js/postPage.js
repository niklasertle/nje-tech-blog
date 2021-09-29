const deletePost = async (event) => {
    // Gets the ID from the path param
    const pathParams = window.location.pathname + window.location.search;

    // Fetch request to database using 
    const postDelete = await fetch(`/api/${pathParams}`, {
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