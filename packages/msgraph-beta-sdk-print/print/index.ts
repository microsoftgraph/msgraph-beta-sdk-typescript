/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPrintFromDiscriminatorValue, serializePrint, type Print } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ConnectorsRequestBuilderNavigationMetadata, ConnectorsRequestBuilderRequestsMetadata, type ConnectorsRequestBuilder } from './connectors/';
import { OperationsRequestBuilderNavigationMetadata, OperationsRequestBuilderRequestsMetadata, type OperationsRequestBuilder } from './operations/';
import { PrintersRequestBuilderNavigationMetadata, PrintersRequestBuilderRequestsMetadata, type PrintersRequestBuilder } from './printers/';
import { PrinterSharesRequestBuilderNavigationMetadata, PrinterSharesRequestBuilderRequestsMetadata, type PrinterSharesRequestBuilder } from './printerShares/';
import { ServicesRequestBuilderNavigationMetadata, ServicesRequestBuilderRequestsMetadata, type ServicesRequestBuilder } from './services/';
import { SharesRequestBuilderNavigationMetadata, SharesRequestBuilderRequestsMetadata, type SharesRequestBuilder } from './shares/';
import { TaskDefinitionsRequestBuilderNavigationMetadata, TaskDefinitionsRequestBuilderRequestsMetadata, type TaskDefinitionsRequestBuilder } from './taskDefinitions/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the print singleton.
 */
export interface PrintRequestBuilder extends BaseRequestBuilder<PrintRequestBuilder> {
    /**
     * Provides operations to manage the connectors property of the microsoft.graph.print entity.
     */
    get connectors(): ConnectorsRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.print entity.
     */
    get operations(): OperationsRequestBuilder;
    /**
     * Provides operations to manage the printers property of the microsoft.graph.print entity.
     */
    get printers(): PrintersRequestBuilder;
    /**
     * Provides operations to manage the printerShares property of the microsoft.graph.print entity.
     */
    get printerShares(): PrinterSharesRequestBuilder;
    /**
     * Provides operations to manage the services property of the microsoft.graph.print entity.
     */
    get services(): ServicesRequestBuilder;
    /**
     * Provides operations to manage the shares property of the microsoft.graph.print entity.
     */
    get shares(): SharesRequestBuilder;
    /**
     * Provides operations to manage the taskDefinitions property of the microsoft.graph.print entity.
     */
    get taskDefinitions(): TaskDefinitionsRequestBuilder;
    /**
     * Get print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Print>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PrintRequestBuilderGetQueryParameters> | undefined) : Promise<Print | undefined>;
    /**
     * Update print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Print>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Print, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Print | undefined>;
    /**
     * Get print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PrintRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Print, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get print
 */
export interface PrintRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const PrintRequestBuilderUriTemplate = "{+baseurl}/print{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PrintRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PrintRequestBuilderNavigationMetadata: Record<Exclude<keyof PrintRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    connectors: {
        requestsMetadata: ConnectorsRequestBuilderRequestsMetadata,
        navigationMetadata: ConnectorsRequestBuilderNavigationMetadata,
    },
    operations: {
        requestsMetadata: OperationsRequestBuilderRequestsMetadata,
        navigationMetadata: OperationsRequestBuilderNavigationMetadata,
    },
    printers: {
        requestsMetadata: PrintersRequestBuilderRequestsMetadata,
        navigationMetadata: PrintersRequestBuilderNavigationMetadata,
    },
    printerShares: {
        requestsMetadata: PrinterSharesRequestBuilderRequestsMetadata,
        navigationMetadata: PrinterSharesRequestBuilderNavigationMetadata,
    },
    services: {
        requestsMetadata: ServicesRequestBuilderRequestsMetadata,
        navigationMetadata: ServicesRequestBuilderNavigationMetadata,
    },
    shares: {
        requestsMetadata: SharesRequestBuilderRequestsMetadata,
        navigationMetadata: SharesRequestBuilderNavigationMetadata,
    },
    taskDefinitions: {
        requestsMetadata: TaskDefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: TaskDefinitionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PrintRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: PrintRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPrintFromDiscriminatorValue,
        queryParametersMapper: PrintRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: PrintRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPrintFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePrint,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
