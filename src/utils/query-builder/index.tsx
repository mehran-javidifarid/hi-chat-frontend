import qs from "query-string";

export default (param: any = {}) => {
    if (typeof param !== "object") {
        param = qs.parse(param);
    }
    const {page_no = undefined, count = undefined, filter = undefined, sort = '-id', ...params} = param;
    let ordering = '-id';

    if (sort.order) {
        if (typeof sort === 'object') {
            ordering = sort.order === "ascend" ? sort.field : "-" + sort.field;
        } else {
            ordering = sort;
        }
    }

    return `?${qs.stringify({page_no, count, ...params, ...filter}, {arrayFormat: 'comma'})}`;
};
