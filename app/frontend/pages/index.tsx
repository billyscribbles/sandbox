import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../src/components/layout';
import utilStyles from '../src/styles/utils.module.css';
import { getSortedPostsData } from '../src/lib/posts';
import Link from 'next/link';
import FormattedDate from '../src/utils/formattedDate';
import { GetStaticProps } from 'next';

//TODO: JUST SAMPLE CODE - TO BE DELETED

export interface IAllPostsData {
    date: string;
    title: string;
    id: string;
}

export type HomeProps = {
    allPostsData: IAllPostsData[];
};

export default function Home({ allPostsData }: HomeProps): JSX.Element {
    const today = new Date().toISOString().split('T')[0];

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this in{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <br />
                <h2 className={utilStyles.headingLg}>Sample Code: Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <FormattedDate dateString={date} />
                            </small>
                        </li>
                    ))}
                    <li className={utilStyles.listItem}>
                        <Link href={`/demo`}>
                            <a>Demo</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <FormattedDate dateString={today} />
                        </small>
                    </li>
                </ul>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    };
};
