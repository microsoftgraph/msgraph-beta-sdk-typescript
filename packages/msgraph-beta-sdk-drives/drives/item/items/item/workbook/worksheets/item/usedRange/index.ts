/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWorkbookRangeFromDiscriminatorValue, type WorkbookRange } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the usedRange method.
 */
export interface UsedRangeRequestBuilder extends BaseRequestBuilder<UsedRangeRequestBuilder> {
    /**
     * Invoke function usedRange
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookRange
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookRange | undefined>;
    /**
     * Invoke function usedRange
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const UsedRangeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookRangeFromDiscriminatorValue,
    },
};
/**
 * Uri template for the request builder.
 */
export const UsedRangeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/usedRange()";
/* tslint:enable */
/* eslint-enable */