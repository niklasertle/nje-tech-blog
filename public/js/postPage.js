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
};

const showComment = async (event) => {
    let commentForm = document.querySelector(".comment");
    commentForm.classList.remove("hide");
};

const createComment = async (event) => {
    event.preventDefault();

    const pathParams = window.location.pathname + window.location.search;
    const pathArry = pathParams.split('/');
    const postId = pathArry[2];

    const comment = {
        title: document.querySelector('#comment-title').value.trim(),
        description: document.querySelector('#comment-description').value.trim(),
        post_id: postId
    };

    const addComment = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: { 'Content-Type': 'application/json' }
    });

    if (addComment.ok) {
        location.replace(`/post/${postId}`)
    } else {
        alert('Failed to create a new comment')
    }
}

document.querySelector('#delete-button').addEventListener('click', deletePost);
//document.querySelector('#update-button').addEventListener('click', updatePost);
document.querySelector('#comment-button').addEventListener('click', showComment);
document.querySelector('.comment-form').addEventListener('submit', createComment);