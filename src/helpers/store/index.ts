import { ActionTypes } from "../../actions/types";
import { FeaturedJobItem } from "../../types/jobs.types";

export const isLoaded = (status: string) => {
    return ActionTypes.LOADED === status;
};

export const notLoaded = (status: string) => {
    return ActionTypes.NOT_LOADED === status;
};

export const isLoading = (status: string) => {
    return ActionTypes.IS_LOADING === status;
};

export const failedLoading = (status: string) => {
    return ActionTypes.LOADING_FAILED === status;
};

// Format date to date difference ( 2 days)
export const dateToTime = (created_at: string) => {
    let created = sliceDate(created_at);
    let current = convertDate(new Date())

    const createdDate: any = new Date(`${created}`);
    const today: any = new Date(`${current}`);

    const diffTime = Math.abs(today - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
};

// Format date to MM/DD/YYYY
export const convertDate = (date: Date) => {
    let day = date.getDate();
    let month: string | number = date.getMonth();
    month = month + 1;
    let year = date.getFullYear();

    if (month.toString().length === 1) {
        month = `0${month}`;
    }

    return `${month}/${day}/${year}`;
};

// Format date to MM/DD/YYYY
export const sliceDate = (date: string) => {
    const day = date.toString().slice(8, 10);
    let month = date.toString().slice(4, 7);

    let monthNo = getMonthNoFromString(month);

    const year = date.toString().slice(24, 29);

    return `${monthNo}/${day}/${year}`;
};

// Get month index from string (01, 02)
export const getMonthNoFromString = (month: string) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let index: string | number = months.findIndex(item => item === month);
    index = index + 1;

    if (index.toString().length === 1) {
        index = `0${index}`;
    }

    return index;
};

export const setFeaturedCompany = (jobs: FeaturedJobItem[]) => {
    let company = jobs[0];

    let index = Math.floor(Math.random() * 10);
    if (index < jobs.length) {
        company = jobs[index];
    }

    let jobCount = getCompanyJobCount(jobs, company.company);

    let data = {
        name: company.company,
        logo: company.company_logo,
        jobCount: jobCount
    };

    return data;
};

export const getCompanyJobCount = (jobs: FeaturedJobItem[], company: string) => {
    let count: number = 0;

    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].company === company) {
            count++;
        }
    }

    return count;
}