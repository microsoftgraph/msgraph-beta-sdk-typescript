/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWorkbookChartLegendFromDiscriminatorValue, serializeWorkbookChartLegend, type WorkbookChartLegend } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the legend property of the microsoft.graph.workbookChart entity.
 */
export interface LegendRequestBuilder extends BaseRequestBuilder<LegendRequestBuilder> {
    /**
     * Delete navigation property legend for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of chartlegend object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartLegend
     * @see {@link https://learn.microsoft.com/graph/api/chartlegend-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<LegendRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookChartLegend | undefined>;
    /**
     * Update the properties of chartlegend object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartLegend
     * @see {@link https://learn.microsoft.com/graph/api/chartlegend-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: WorkbookChartLegend, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookChartLegend | undefined>;
    /**
     * Delete navigation property legend for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of chartlegend object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LegendRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of chartlegend object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: WorkbookChartLegend, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of chartlegend object.
 */
export interface LegendRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const LegendRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LegendRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookChartLegendFromDiscriminatorValue,
        queryParametersMapper: LegendRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookChartLegendFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookChartLegend,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const LegendRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/itemAt(index={index})/legend{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */