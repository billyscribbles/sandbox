import React from 'react';
import Layout from '../../src/components/layout';
import { getAllPostIds, getPostData } from '../../src/lib/posts';
import Head from 'next/head';
import Date from '../../src/components/date';
import utilStyles from '../../src/styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';

//TODO: JUST SAMPLE CODE - TO BE DELETED

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData
        }
    };
};

export default function Post({
    postData
}: {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
    };
}): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}
