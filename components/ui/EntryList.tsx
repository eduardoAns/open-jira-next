import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo, DragEvent } from 'react'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './'
import styles from './EntryList.module.css'

interface Props {
    status:EntryStatus
}

export const EntryList:FC<Props> = ({status}) => {

    const { entries, updateEntry } = useContext(EntriesContext)
    const {isDragging, endDragging} = useContext(UIContext)

    const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ), [entries])
    
    const onDropEntry = (e:DragEvent<HTMLDivElement>) => {
        //modificar el estado si estoy haciendo drop
        const id = e.dataTransfer.getData('text')
        const entry = entries.find ( entry => entry._id === id)

        if (entry) {
            entry.status = status
            updateEntry(entry)
            endDragging()
        }

    }

    const allowDrop = (e:DragEvent<HTMLDivElement>) => {
        //modificar el estado si estoy haciendo drop
        e.preventDefault()
    }


  return (
    // en esta seccion se hara el drop
    <div
        onDrop={onDropEntry}
        onDragOver = {allowDrop}
        className={isDragging ? styles.dragging : ''}
    >
        <Paper sx={{ height:'calc(100vh - 250px)', overflow:'auto', backgroundColor:'transparent', padding:'1px 5px'}}>
            
            <List sx={{opacity: isDragging?0.2:1, transition:'all .3s '}}>
                {
                    entriesByStatus.map( entry => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))
                }
            </List>
        </Paper>
    </div>
  )
}
