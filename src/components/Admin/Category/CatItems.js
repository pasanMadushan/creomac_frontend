import CatItem from './CatItem';

const CatItems = ({cat,deleteCategory}) => {
    return (
        <>
        {
            cat.map((cat)=>(
                <CatItem key={cat.cat_id} cat={cat} deleteCategory={deleteCategory}  />
            ))
        }
        </>
    )
}

export default CatItems


