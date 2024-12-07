/* eslint-disable @typescript-eslint/no-explicit-any */

interface Template{
    component: React.ComponentType<any>;
    data: any;
}


const TemplateEngine = (()=>{
    const templates: Record<string, Template> = {};

    //Register new templates
    const register = (id:string, component:React.ComponentType<any>, data:any = null) => {
        if(templates[id]){
            console.warn(`Template "${id}" already exists.`);
            return;
        }

        templates[id] = {
            component,
            data
        }

        console.log(`Registered template "${id}"`)

    }

    //retrieve a template by ID
    const get = (id: string): Template | null => {
        return templates[id] || null;
    }

    const getAll = () =>{
        return templates;
    }

    return{
        register,
        get,
        getAll,
    }

})()


export default TemplateEngine;