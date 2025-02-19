import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FrequentlyQuestion(): JSX.Element {
  return (
    <div id="faq" className="py-12 bg-gray-100 px-4">
      <div className="text-3xl md:text-4xl font-bold font-kanit py-8 text-center">
        FAQ
      </div>
      <Accordion type="single" collapsible className="max-w-5xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            How do Libertas provides Analytic support
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-xl font-normal">
            Libertas is a brand that is set with expert professional that are
            there to create and increase the asset of a business
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            Is Libertas Sustainable?
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-xl font-normal">
            Libertas is a sustainable company hereby ensure that all process of
            sustainability is not hampered which can lead to the growth fo a
            company
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            How do libertas go on with their Personnel development
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-xl font-normal">
            Libertas is there by ensure and train staff to meet the requirement
            development to function more as a lucrative company, thereby to
            ensure that everything is run smoothly
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            How dose libertas integrate Crypto
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-xl font-normal">
            Libertas integrate blockchain fo a smart and clear coodinatin of a
            business thereby enabling transparency.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
