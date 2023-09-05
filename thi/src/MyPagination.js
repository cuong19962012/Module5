import Pagination from 'react-bootstrap/Pagination';
function MyPagination({ pageNumber, setPageNumber, totalPages }) {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {

        items.push(
            <Pagination.Item active={number === pageNumber + 1}>{number}</Pagination.Item>
        )
    }

    return (
        <Pagination>
            <Pagination.Prev onClick={() => setPageNumber(prev => (prev - 1))} />
            {items}
            < Pagination.Next onClick={() => setPageNumber(prev => (prev + 1))} />
        </Pagination>
    );
}

export default MyPagination;