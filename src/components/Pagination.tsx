"use client";

import { PokemonContext } from '@/providers/PokemonContext';
import { useSearchParams, useRouter } from 'next/navigation';
import { useContext } from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = () => {
  const {
    setOffset,
    pagination,
  } = useContext(PokemonContext);

  const router = useRouter();
  const pageCount = Math.ceil(pagination.totalItems / pagination.sizePage);
  const searchParams = useSearchParams();
	const initialPage = searchParams.get('page') ?? '1';

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * pagination.sizePage);
    setOffset(newOffset);
    if (newOffset === 0) router.push('/');
    else router.push(`/?page=${selected + 1}`);
  }

  return (
    <ReactPaginate
      initialPage={Number(initialPage) - 1}
      breakLabel="..."
      nextLabel="Siguiente >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< Anterior"
      renderOnZeroPageCount={null}
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
    />
  )
}

export default Pagination;