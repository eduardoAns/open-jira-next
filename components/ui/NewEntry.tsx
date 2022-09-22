import { Box, Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry  = () => {

    const [inputValue, setInputValue] = useState('')
    const [isTouch, setIsTouch] = useState(false)
    const {addNewEntry} = useContext(EntriesContext)
    const { setIsAddingEntry, isAddingEntry } = useContext(UIContext)

    const onTextFieldChanges = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
       
    }

    const onSave = () => {
        if(inputValue.length === 0) return

        addNewEntry(inputValue)
        setIsTouch(false)
        setIsAddingEntry(false)
        setInputValue('')
    }

  return (
    <Box sx={{marginBottom:2, paddingX:1}}>
        
        {
            isAddingEntry?(
                <>
                <TextField 
                    fullWidth 
                    sx={{marginTop:2, marginBottom:1}} 
                    placeholder='Nueva entrada'
                    autoFocus
                    multiline
                    label='Nueva entrada'
                    error={inputValue.length === 0 && isTouch}
                    helperText={inputValue.length === 0 && isTouch && 'La entrada no puede estar vacia'}
                    value={inputValue}
                    onChange={ onTextFieldChanges }
                    onBlur={ () => setIsTouch(true) }
                />
                <Box display={'flex'} justifyContent='space-between'>
                    <Button 
                        variant='outlined' 
                        color='secondary'
                        endIcon={<SaveOutlinedIcon />}
                        onClick={ onSave }
                    > 
                    Guardar
                    </Button>
                
                    <Button 
                        variant='outlined' 
                        color='error'
                        endIcon={<DeleteOutlinedIcon />}
                        onClick={()=>setIsAddingEntry(false)}
                    > 
                    Cancelar
                    </Button>
                </Box>
                </>
            )
            :
            (
            <Button
                startIcon={<AddCircleOutlineOutlinedIcon />}
                fullWidth
                variant='outlined'
                onClick={()=> setIsAddingEntry(true)}
            > 
            Agregar Tarea
            </Button>
            )
        }

        

        

        
    </Box>
  )
}
