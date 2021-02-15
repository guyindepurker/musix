function query(userId) {
    return httpService.get(`board?userId=${userId}`);
}

function getById(boardId) {
    return httpService.get(`board/${boardId}`);
}

function remove(boardId) {
    return httpService.delete(`board/${boardId}`);
}

function save(board) {
    const savedBoard = board._id ? _update(board) : _add(board);
    return savedBoard;
}

async function _add(board) {
    return httpService.post(`board/`, board);
}

async function _update(board) {
    return httpService.put(`board/${board._id}`, board);
}
