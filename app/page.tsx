import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEW_LIMIT } from '@/app/_constants';
import styles from './page.module.css';
import NewsList from './_components/NewsList';
import ButtonLink from '@/app/_components/ButtonLink';

// const data: { contents: News[] } = {
//   contents: [
//     {
//       id: '1',
//       title: '渋谷にオフィスを移転しました',
//       category: {
//         name: '更新情報',
//       },
//       publishedAt: '2024/11/03',
//       createdAt: '2024/11/03',
//     },
//     {
//       id: '2',
//       title: '当社CEOが業界リーダーTOP30に選出されました',
//       category: {
//         name: '更新情報',
//       },
//       publishedAt: '2024/11/02',
//       createdAt: '2024/11/02',
//     },
//     {
//       id: '3',
//       title: 'テストの記事です',
//       category: {
//         name: '更新情報',
//       },
//       publishedAt: '2024/11/01',
//       createdAt: '2024/11/01',
//     },
//   ],
// };

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEW_LIMIT });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt="top bg-img"
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
