import CatItem from './CatItem';

const CatItems = ({cat,deleteCategory,editCategory}) => {
    return (
        <>
        {
            cat.map((cat)=>(
                <CatItem key={cat.cat_id} cat={cat} deleteCategory={deleteCategory}  editCategory={editCategory}/>
            ))
        }
        </>
    )
}

export default CatItems


