import {ThumbsUp, Trash} from 'phosphor-react'
import styles from '../components/Comments.module.css'

export function Comments(){

    return(
        <div className={styles.comments} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" />
                <div className={styles.commentsBox} >

                    <div className={styles.commentsContent}>
                            <header>
                                <div className={styles.authorAndTime} >
                                    <strong> Tenico do projeto</strong>
                                    <time title='02/04/24' dateTime='2024-04-02' > cerca de 1 hora atrás </time>
                                    </div>
                                    <div>
                                        <button title='Excluir Comentário'>
                                            <Trash />

                                        </button>
                                    </div>
                                
                            </header>

                            <p>Muito bom, Parabéns pela realização  </p>

                    </div>
                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span> 
                        </button>
                    </footer>

                </div>
        </div>
    )

}