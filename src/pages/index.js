import React, { useState } from 'react';
import Layout from '@theme/Layout';
import '../css/index.css'
import Introduction from './components/Intro/Introduction';
import BookList from './components/Book-list/BookList';

export default function App() {
  const [books, setBooks] = useState([
    {'id': "1", 'title' :'📖 Middlemarch', 'link':'/GEreader/middlemarch'},
    {'id': "2", 'title' :'📖 The Mill on the Floss', 'link':'/GEreader/The Mill on the Floss'},
    {'id': "3", 'title' :'📖 Romola', 'link':'/GEreader/romola'},
    {'id': "4", 'title' :'📖 Daniel Deronda', 'link':'/GEreader/Daniel Deronda'},
    {'id': "5", 'title' :'📖 Impressions of Theophrastus Such', 'link':'/GEreader/Impressions of Theophrastus Such'},
    {'id': "6", 'title' :'📖 Adam Bede', 'link':'/GEreader/Adam Bede'},
    {'id': "7", 'title' :'📖 Scenes of Clerical Life', 'link':'/GEreader/Scenes of Clerical Life'},
    {'id': "8", 'title' :'📖 Silas Marner', 'link':'/GEreader/Silas Marner'},
    {'id': "9", 'title' :'📖 Felix Holt, the Radical', 'link':'/GEreader/Felix Holt, the Radical'},
  ]);

  return (
    <Layout title="GEReader" description="Introduction">
      <BookList listData={books} />
      <Introduction />
    </Layout>
  );
}