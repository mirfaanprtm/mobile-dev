import { DATA } from "../data/products"
import sleep from "../shared/utils/sleep"

const ProductService = () => {
    const getAllProduct = async(page) => {
        const itemPerPage = 12
        const startIndex = (page - 1) * itemPerPage
        const endIndex = page * itemPerPage

        try {
            return await sleep((resolve, reject) => {
                const respoonse = DATA.slice(startIndex, endIndex)
                if(respoonse.length == 0){
                    reject('No more data')
                } else {
                    resolve(respoonse)
                }
            }) 
        } catch (e) {
            throw e
        }
    }

    return {
        getAllProduct
    }
}

export default ProductService