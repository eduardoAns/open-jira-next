import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC, DragEvent, useContext } from 'react'
import { UIContext } from '../../context/ui'
import { Entry } from '../../interfaces'

interface Props {
    entry:Entry
}


export const EntryCard:FC<Props> = ({entry}) => {

    const { startDragging, endDragging} = useContext(UIContext)

    const onDragStart = (e:DragEvent<HTMLDivElement>) => {
        //modificar el estado si estoy haciendo drag
        e.dataTransfer.setData('text', entry._id)
        startDragging()
    }

    const onDragEnd = (e:DragEvent<HTMLDivElement>) => {
        //modificar el estado si dejo de hacer drag
        endDragging()
    }

  return (
    <Card
        sx={{ marginBottom: 1}}
        //eventos drag
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx = {{whiteSpace:'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'end', paddingRight:4 }}>
                <Typography variant='body2'  sx={{whiteSpace:'pre-line'}}>hace 30 min</Typography>   
            </CardActions>
        </CardActionArea>
        
    </Card>
  )
}
