/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPrintJobStatusFromDiscriminatorValue, type PrintJobStatus } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the startPrintJob method.
 */
export interface StartPrintJobRequestBuilder extends BaseRequestBuilder<StartPrintJobRequestBuilder> {
    /**
     * Invoke action startPrintJob
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PrintJobStatus>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The printerShares navigation property is deprecated and will stop returning data on July 31, 2023. Please use the shares navigation property instead of this. as of 2023-06/Tasks_And_Plans on 2023-06-13 and will be removed 2023-07-31
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrintJobStatus | undefined>;
    /**
     * Invoke action startPrintJob
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The printerShares navigation property is deprecated and will stop returning data on July 31, 2023. Please use the shares navigation property instead of this. as of 2023-06/Tasks_And_Plans on 2023-06-13 and will be removed 2023-07-31
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const StartPrintJobRequestBuilderUriTemplate = "{+baseurl}/print/printerShares/{printerShare%2Did}/jobs/{printJob%2Did}/startPrintJob";
/**
 * Metadata for all the requests in the request builder.
 */
export const StartPrintJobRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: StartPrintJobRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPrintJobStatusFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
