import React from 'react'
import Back from '../../common/back/Back'
import Header from '../../common/heading/Header'
import './sql.css'
import Lab from '../../common/Labs/Lab'


function sql() {
    return (
        <>
       
            <Header />
            <Back title='SQL Injection Attack' />
            <section className='sql_module'>
            <div className='container'>
                <div className='sql'>
                    <h1>What is SQL injection ?</h1>
                    <p>SQL injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries 
                        that an application makes to its database. It generally allows an attacker to view data that they are not 
                        normally able to retrieve. This might include data belonging to other users, or any other data that the 
                        application itself is able to access. In many cases, an attacker can modify or delete this data, causing
                         persistent changes to the application's content or behavior.
                        
                    </p>
                   
                </div>
                <Lab/>
            </div>
          
            </section>
            
        </>
    )
}

export default sql