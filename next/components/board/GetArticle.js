import * as React from 'react';
import Head from 'next/head';
import styles from "@/styles/Table.module.css";

export function GetArticle({ columns,colspan, data }){
  return (
      <div className={styles.body}>
    <table className={styles.table}>
    <Head>
    <title>게시판| 목록</title>
    </Head>
    <thead>
        <tr>
            {columns.map((column) => (
                <th key={column.title}>{column}</th>))}
        </tr>
    </thead>
    <tbody>
        { data.length == 0 ?
            <tr>
                <td colSpan={colspan}>데이터가 없습니다.</td>
            </tr>
        :data.map((board) => (
            <tr key={board.beans}>
                <td>{board.beans}</td>
                <td>{board.roast}</td>
                <td>{board.origin}</td>
                <td>{board.flavor}</td>
                <td>{board.acidity}</td>
            </tr>
        ))}
    </tbody>
 </table>
 </div>
  );
}