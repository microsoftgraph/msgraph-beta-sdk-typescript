/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the startWorkingTime method.
 */
export interface StartWorkingTimeRequestBuilder extends BaseRequestBuilder<StartWorkingTimeRequestBuilder> {
    /**
     * Triggers the policies associated with the end of working hours.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Triggers the policies associated with the end of working hours.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const StartWorkingTimeRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/solutions/workingTimeSchedule/startWorkingTime";
/**
 * Metadata for all the requests in the request builder.
 */
export const StartWorkingTimeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: StartWorkingTimeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
};
/* tslint:enable */
/* eslint-enable */