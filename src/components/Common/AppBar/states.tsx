import React from 'react';



export const useTitle = (): [string, React.Dispatch<React.SetStateAction<any>>] => {
    const [title, setTitle] = React.useState<string>('');
    return [title, setTitle];
}   