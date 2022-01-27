import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import cvFile from '../downloads/cv.pdf'

export default function About() {
    return (
        <Layout>
            <div>
                <h1 style={{textAlign:"center"}}>
                    I am an junior web developer who is self-motivated and open to learning.
                </h1>
                
            </div>
            <Link className={ styles.aboutBtn }  href={cvFile} download="MladenReljic_CV">Download My CV</Link>
        </Layout>
    )
}
