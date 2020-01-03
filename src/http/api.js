import service from './index'
export default {
    getRecommend() {
        return service.req('/recommend')
    },
    getDetail(id, page = 1) {
        return service.req(`/goods/one?id=${id}&page=${page}`)
    },
    getCategory(id) {
        return service.req(`/classification?mallSubId=${id}`)
    }

}