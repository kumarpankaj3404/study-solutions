"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { subjects } from "@/constants"
import { createCompanion } from "@/lib/actions/companions.actions"
import { redirect } from "next/navigation"

const formSchema = z.object({
    name: z.string().min(1,{message: 'Companion is needed'}),
    subject: z.string().min(1,{message: 'Subject is needed'}),
    topic: z.string().min(1,{message: 'Topic is needed'}),
    voice: z.string().min(1,{message: 'Voice is needed'}),
    style: z.string().min(1,{message: 'Style is needed'}),
    duration: z.number().min(1,{message: 'Duration is needed'}),
})

const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name : "",
            subject : "",
            topic : "",
            voice : "",
            style : "",
            duration : 15
        },
    })
    
    async function onSubmit(data: z.infer<typeof formSchema>) {
        const companion = await createCompanion(data);
        if(companion) {
            redirect(`/companions/${companion.id}`);
        }else{
            console.log("Error creating companion");
            redirect('/');          
        }
    }
  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/*  Name */}
          <FormField  
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companion</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter the companion name" 
                    {...field}
                    className="input"
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> 
        {/*  Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Select 
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                        <SelectTrigger className="input capitalize">
                            <SelectValue placeholder="Select the subject" />
                        </SelectTrigger>
                        <SelectContent >
                            {subjects.map((sub) => (
                                <SelectItem key={sub} value={sub} className="capitalize">
                                    {sub}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        {/*  Topic */}
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What should companion help with</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Ex. Derivatives & Integrals" 
                    {...field}
                    className="input"
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        {/*  Voice */}
          <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voice</FormLabel>
                <FormControl>
                  <Select 
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                        <SelectTrigger className="input ">
                            <SelectValue placeholder="Select the voice" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem  value="male" className="capitalize">
                                Male
                            </SelectItem>
                            <SelectItem value="female" className="capitalize">
                                Female
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        {/* Style */}
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                  <Select 
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                        <SelectTrigger className="input ">
                            <SelectValue placeholder="Select the style" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem  value="formal" className="capitalize">
                                Formal
                            </SelectItem>
                            <SelectItem value="casual" className="capitalize">
                                Casual
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Duration */}
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated session duration in minutes</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="15" 
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    className="input"
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full cursor-pointer">Build your Companion</Button>
        </form>  
      </Form>  
    </div>  
  )
}

export default CompanionForm