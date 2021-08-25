import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({formacoes}) {
  return (
    <div className={styles.container}>
     <h1>Formações</h1>

     <table>
       <thead>
         <th>TEMA</th>
         <th>RESPONSÀVEL</th>
         <th>CARGA HORÁRIA</th>
         <th>DATA</th>
         <th>SITUAÇÃO</th>
       </thead>
       <tbody>
         {
           formacoes.map(f => (
             <tr>
               <td>{f.tema}</td>
               <td>{f.responsavel}</td>
               <td>{f.carga}</td>
               <td>{f.data}</td>
               <td>{f.situacao}</td>
             </tr>
           ))
         }
       </tbody>
     </table>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const response = await fetch('http://localhost:8080/formacoes');
  const formacoes = await response.json();
  return {
    props: {
      formacoes
    }
  }
}