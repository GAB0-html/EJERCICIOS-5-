
const comments = [];

function addComment() {
    const input = document.getElementById('comentarios');
    const commentText = input.value.trim();
    
    if (commentText === '') {
        alert('Ingresar comentario primero');
        return;
    }

    const comment = {
        id: comments.length + 1, 
        text: commentText,
        timestamp: new Date().toLocaleTimeString()
    };

    comments.push(comment);

    input.value = '';

    renderComments();
}

function renderComments() {
    const commentsSection = document.getElementById('comments-section');
    commentsSection.innerHTML = ''; 

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';

        const commentContent = `
            <p>Comentario #${comment.id} - ${comment.timestamp}</p>
            <p>${comment.text}</p>
        `;

        commentDiv.innerHTML = commentContent;

        commentsSection.appendChild(commentDiv);
    });
}
