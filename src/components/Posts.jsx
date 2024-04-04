    import styles from '../components/Posts.module.css'
import { Comments } from './Comments'
    console.log(styles)
export function Posts(){


        return(
            <article className={styles.posts} >
                <header>
                    <div className={styles.autor} >
                        <img className={styles.avatar}  src='https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png' alt="" />
                            <div className={styles.autorInfo}>
                                <strong>Tecnico do projeto

                                </strong>
                                <span>
                                        web Developer
                                </span>
                            </div>
                    </div>

                    <time title='01/04/2024' dateTime='01/04/2024' >Publicado há 1 hora</time>
                </header>
                    <div className={styles.content} > 
                        <p> Fala galera</p>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio soluta, dolor est eligendi animi exercitationem necessitatibus? Incidunt placeat eaque suscipit animi ducimus ipsa illo totam molestias dolorem corporis, nemo delectus.</p>

                        <p> <a href=""> WEb.design/projeto</a> </p>
                        <p> <a href="">#novoprojeto</a> </p>
                    </div>

                    <form className={styles.commentsForm}>
                        <strong> Deixe seu feedback </strong>
                        <textarea placeholder='Deixe seu comentario'/>

                        <div>
                            <button type='submit' >Comentar</button>
                        </div>

                    </form>
                    
                    <div className={styles.commentsList} >

                    <Comments/>
                    <Comments />
                    <Comments />
           

                    </div>



            </article>


        )
}