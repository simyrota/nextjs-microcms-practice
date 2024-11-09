import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Date from "@/app/_components/Date";
import Category from '@/app/_components/Category';
import styles from './index.module.css';

type Props = {
  data: News;
}

export default function Article({data}: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meda}>
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            className={styles.thumbnail}
            width={data.thumbnail.width}
            height={data.thumbnail.height}
          />
        )
      }
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
}
