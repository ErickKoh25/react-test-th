import React from 'react'

export const ActionButton = (props) => {
    const {id,action,className,type,func} = props
    return (
        <>  
            {
                func!='' ?
                    <button className={`btn btn-primary ${className}`} onClick={() => {func(id,type)}}>
                        {   
                            action.icon != '' && <i className={action.icon}></i>
                        }
                        { action.text }
                    </button>   
                    :   
                        <button className={`btn btn-primary ${className}`}>
                            {   
                                action.icon != '' && <i className={action.icon}></i>
                            }
                            { action.text }
                        </button>   
            }
        </>
    )
}
