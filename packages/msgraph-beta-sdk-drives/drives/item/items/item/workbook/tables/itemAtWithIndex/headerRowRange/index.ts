/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWorkbookRangeFromDiscriminatorValue, type WorkbookRange } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the headerRowRange method.
 */
export interface HeaderRowRangeRequestBuilder extends BaseRequestBuilder<HeaderRowRangeRequestBuilder> {
    /**
     * Gets the range object associated with header row of the table.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookRange
     * @see {@link https://learn.microsoft.com/graph/api/table-headerrowrange?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookRange | undefined>;
    /**
     * Gets the range object associated with header row of the table.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const HeaderRowRangeRequestBuilderRequestsMetadata: RequestsMetadata = {
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
export const HeaderRowRangeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/itemAt(index={index})/headerRowRange()";
/* tslint:enable */
/* eslint-enable */